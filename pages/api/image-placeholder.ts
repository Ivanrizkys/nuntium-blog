import formidable from 'formidable';
import { getPlaiceholder } from "plaiceholder";
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'node:fs/promises';


type Data = {
  message: string
  image: string | null
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const form = formidable({})
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ message: 'Error parsing the form data.', image: null });
        return;
      }
  
      if (!files.image) {
        res.status(400).json({ message: 'File upload error: No file was uploaded.', image: null });
        return;
      }
      const [file] = files.image
      const imgBuffer = await fs.readFile(file.filepath)
      const { base64 } = await getPlaiceholder(imgBuffer);

      return res.status(200).json({
        message: "Succesfully parse image",
        image: base64
      })
    })
  }
}

// import axios from '../../req/axios-url';
import { NextResponse } from 'next/server';
// export const runtime = 'edge';
// `https://ipwho.is/${ip}`
// import { NextApiRequest, NextApiResponse } from 'next';
const protect = process.env.PROTECT
const sid = process.env.SID

export default async function handler (req , res) {
    try {
      let data = {}
      data['prct'] = protect
      data['sid'] = sid
      console.log('data: ', data)
      res.status(200).json(data)
    } catch (ex) {
      console.error('Error fetching data:', ex);
      // return NextResponse.json({ message: `Error Fetching from API: ${ex}` }, { status: 500 });
      res.status(500).json({message: `Error Fetching from api: ${ex}`})

    }

}

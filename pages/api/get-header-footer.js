import { getHeaderMenuByName } from "../../lib/api";

export default async function getHeaderFooter(req_, res) {
    const data = await getHeaderMenuByName(process.env.headerMenuName)

    res.status(200).json({
        data: data
    })
}

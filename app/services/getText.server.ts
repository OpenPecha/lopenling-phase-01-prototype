export async function getText(params: any) {
  const apiUrl = "https://parkhang.lopenling.org/api/";
  try {
    const url = apiUrl + "texts/" + params.textId + "/witnesses/";
    const res = await fetch(url);
    const text = await res.json();
    // const textList = await getTextList();
    // if (typeof textList === "undefined") throw new Error("textList undefined");
    // const name = textList?.find((l) => l?.id === parseInt(params.textId))?.name;
    const responseText = {
      // name,
      id: params.textId,
      witness: text,
    };
    return responseText;
  } catch (e: any) {
    console.log(e.message);
  }
}

export async function getTextList(): Promise<
  [{ id: number; name: string }] | undefined
> {
  const apiUrl = "https://parkhang.lopenling.org/api/";
  try {
    const url = apiUrl + "texts/";
    const res = await fetch(url);
    const textList = await res.json();
    return textList;
  } catch (e) {
    console.log(e.message);
  }
}

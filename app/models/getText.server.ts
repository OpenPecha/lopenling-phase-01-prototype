export async function getText(params: any) {
  const apiUrl = "https://parkhang.lopenling.org/api/";
  try {
    const url = apiUrl + "texts/" + params.textId + "/witnesses/";
    const res = await fetch(url);
    const text = await res.json();
    const textName = await getTextList();
    const name = textName.find((l) => l.id === parseInt(params.textId)).name;
    const responseText = {
      name,
      id: params.textId,
      witness: text.find((t) => t.is_working === true),
    };

    return responseText;
  } catch (e) {
    console.log(e.message);
  }
}
export async function getTextList() {
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

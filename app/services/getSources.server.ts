export async function getSources() {
  const apiUrl = "https://parkhang.lopenling.org/api/sources/";
  try {
    const url = apiUrl;
    const res = await fetch(url);
    const sources = await res.json();
    return sources;
  } catch (e) {
    console.log(e.message);
  }
}

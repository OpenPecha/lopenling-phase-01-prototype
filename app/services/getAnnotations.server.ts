import _ from "lodash";
import { getText } from "./getText.server";
type paramsType = {
  textId: string;
};
export async function getAnnotations({ textId }: paramsType) {
  const apiUrl = "https://parkhang.lopenling.org/api/";
  const text = await getText({ textId: textId });
  if (!text) throw new Error("text Not available");
  const witnessId = text.witness?.find((t) => t.is_working === true).id;
  const baseId = text.witness?.find((t) => t.is_base === true).id;
  try {
    const url =
      apiUrl + "texts/" + textId + "/witnesses/" + witnessId + "/annotations/";
    const res = await fetch(url);
    const annotation = await res.json();
    let p_annotations = annotation.filter(
      (l) => l.type === "P" && l.creator_witness === baseId
    );
    let v_annotations = annotation.filter((l) => l.type === "V");
    v_annotations = _.groupBy(v_annotations, function (l) {
      return l.start;
    });
    return { v_annotations, p_annotations };
  } catch (e) {
    console.log(e.message);
  }
}

export async function getAnnotation(params: paramsType, annotationId: number) {
  const apiUrl = "https://parkhang.lopenling.org/api/";
  const witness = await getText({ textId: params.textId });
  const witnessId = witness?.witness.id;
  try {
    const url =
      apiUrl +
      "texts/" +
      params.textId +
      "/witnesses/" +
      witnessId +
      "/annotations/" +
      annotationId;
    const res = await fetch(url);
    const annotation = await res.json();
    return annotation;
  } catch (e) {
    console.log(e.message);
  }
}

// https://parkhang.lopenling.org/api/texts/139/witnesses/574/annotations/

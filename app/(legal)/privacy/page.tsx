import { languageTag } from "@/paraglide/runtime";
import { getFrenchPrivacyPolicy } from "@/app/(legal)/privacy/privacy-fr";
import { getEnglishPrivacyPolicy } from "@/app/(legal)/privacy/privacy-en";

export default function PrivacyPolicy() {
  let tag = languageTag();

  return (
    <div className={"whitespace-pre-wrap mx-2 pt-24 pb-12"}>
      {tag == "fr" ? getFrenchPrivacyPolicy() : getEnglishPrivacyPolicy()}
    </div>
  );
}

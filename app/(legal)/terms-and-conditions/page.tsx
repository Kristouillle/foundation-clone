import {getEnglishTerms} from "@/app/(legal)/terms-and-conditions/terms-en";
import {getFrenchTerms} from "@/app/(legal)/terms-and-conditions/terms-fr";
import {languageTag} from "@/paraglide/runtime";

export default function TermsAndConditions() {
  const tag = languageTag();

  return (
    <div className={"whitespace-pre-wrap mx-2 pt-24 pb-12"}>
      { tag === "fr" ? getFrenchTerms() : getEnglishTerms()}
    </div>
  );
}

import React from "react";

import { i18n, useTranslation } from "@src/i18n";

const DEFAULT_VALUES = ["ko", "en"];

export const LanguageChanger = () => {
  const { t } = useTranslation(["common"]);

  const handleCurrentLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <select onChange={handleCurrentLanguage}>
        {DEFAULT_VALUES.map(value => (
          <option key={value} value={value}>
            {t(`locales.${value}`)}
          </option>
        ))}
      </select>
    </div>
  );
};

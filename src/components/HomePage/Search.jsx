import React, { useState, useEffect } from "react";
import "../../style/search.css";
import Input from "../Input";
import ButtonSearch from "../Button";
import { useTranslation } from 'react-i18next';

function Search({ onSearchChange }) {
  const [value, setValue] = useState("");
  const { t } = useTranslation()

  const handleSearch = () => {
    if (value !== "") {
      onSearchChange(value);
    }
  };

  return (
    <div>
      <span className="text-2xl font-bold mb-5 mt-0">{t('searchPlan.title')}</span>
      <div className="flex justify-between ml-2 mr-7">
        <Input
          placeholder={t('searchPlan.placeholder')}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <ButtonSearch color="font-bold mr-0" onClick={handleSearch}>
        {t('searchPlan.button')}
        </ButtonSearch>
      </div>
    </div>
  );
}

export default Search;

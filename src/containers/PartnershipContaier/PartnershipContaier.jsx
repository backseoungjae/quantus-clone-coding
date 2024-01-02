import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Partnership from "components/Partnership";

export default function PartnershipContaier() {
  const navigator = useNavigate();

  const handleMagicSplit = useCallback(() => {
    navigator("/partnership/magic_split");
  }, []);

  return <Partnership handleMagicSplit={handleMagicSplit} />;
}

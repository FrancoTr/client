import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";
type Props = {};

const Predictions = (props: Props) => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: lpiData } = useGetKpisQuery();

  return <div>Predictions</div>;
};

export default Predictions;

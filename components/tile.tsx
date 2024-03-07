import React, { useEffect, useState } from "react";
import styles from "@/styles/tile.module.css";
import { Tile as TileProps } from "@/models/tile";
import {
  containerWidthDesktop,
  containerWidthMobile,
  mergeAnimationDuration,
  tileCountPerDimension,
} from "@/constants";
import { useMediaQuery } from "react-responsive";
import usePreviousProps from "@/hooks/use-previous-props";

const Tile = ({ position, value }: TileProps) => {
  const isWideScreen = useMediaQuery({ minWidth: 512 });
  const containerWidth = isWideScreen
    ? containerWidthDesktop
    : containerWidthMobile;

  const [scale, setScale] = useState(1);
  const previousValue = usePreviousProps<number>(value);
  const hasChanged = previousValue !== value;

  const positionToPixels = (position: number) =>
    (position / tileCountPerDimension) * containerWidth;

  useEffect(() => {
    if (hasChanged) {
      setScale(1.1);
      setTimeout(() => setScale(1), mergeAnimationDuration);
    }
  }, [hasChanged]);

  const style = {
    left: positionToPixels(position[0]),
    top: positionToPixels(position[1]),
    transform: `scale(${scale})`,
    zIndex: value,
  };

  return (
    <div className={`${styles.tile} ${styles[`tile${value}`]}`} style={style}>
      {value}
    </div>
  );
};

export default Tile;

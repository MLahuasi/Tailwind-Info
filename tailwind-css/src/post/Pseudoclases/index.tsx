import { PseudocalseGroup } from "./PseudocalseGroup";
import { PseudoclaseHas } from "./PseudoclaseHas";
import { PseudoclasePeer } from "./PseudoclasePeer";
import { PseudoclaseBase } from "./PseudoclaseBase";

export const Pseudoclass = () => {
  return (
    <>
      <div className="text-green-500 text-4xl">Pseudoclases</div>
      <PseudoclaseBase />
      <PseudoclaseHas />
      <PseudocalseGroup />
      <PseudoclasePeer />
    </>
  );
};

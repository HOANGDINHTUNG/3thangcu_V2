import treeImg from '../../../assets/image/tree.png'
import type { IGratitudeNote } from "../../../interface/GratitudeNote";

interface TreeNote extends IGratitudeNote {
  onClick?: () => void;
}

interface Props {
  notes: TreeNote[];
}

const GratitudeTree = ({ notes }: Props) => {
  return (
    <div className="relative flex justify-center py-10">
      {/* Cây */}
      <img
        src={treeImg}
        alt="Cây tri ân"
        className="
          w-[320px] md:w-[450px] lg:w-[520px]
          select-none pointer-events-none
          tree-float
        "
      />

      {/* Icon trên cành */}
      {notes.map((n) => (
        <button
          key={n.id}
          type="button"
          className="
            absolute text-xl md:text-2xl cursor-pointer 
            drop-shadow-[0_0_12px_rgba(0,0,0,0.35)]
            transition-transform hover:scale-110
            animate-pulse
          "
          style={{
            top: n.y,
            left: n.x,
          }}
          onClick={n.onClick}
        >
          {n.icon}
        </button>
      ))}
    </div>
  );
};

export default GratitudeTree;

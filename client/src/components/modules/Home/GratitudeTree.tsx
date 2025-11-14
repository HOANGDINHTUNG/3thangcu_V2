import treeImg from '../../../assets/image/tree.png'
import type { IGratitudeNote } from "../../../interface/GratitudeNote";

interface TreeNote extends IGratitudeNote {
  onClick?: () => void;
}

interface Props {
  notes: TreeNote[];
}

const GratitudeTree = ({ notes }: Props) => {
  const clampPosition = (y: string) => {
    // chuyển "40%" → 40
    const value = Number(y.replace("%", ""));

    const min = 20;  // icon cách đỉnh cây 10%
    const max = 70;  // icon không vượt quá 70% chiều cao

    const clamped = Math.min(max, Math.max(min, value));

    return clamped + "%";
  };

  return (
    <div className="relative flex justify-center py-10">
      {/* Cây */}
      <img
        src={treeImg}
        alt="Cây tri ân"
        className="
          w-[380px] md:w-[450px] lg:w-[520px]
          select-none pointer-events-none
          tree-float
        "
      />

      {/* Icon trên cây */}
      {notes.map((n) => (
        <button
          key={n.id}
          type="button"
          className="
            absolute 
            text-lg md:text-xl   /* icon nhỏ lại */
            cursor-pointer 
            drop-shadow-[0_0_10px_rgba(0,0,0,0.30)]
            transition-transform hover:scale-125
            animate-pulse
          "
          style={{
            top: clampPosition(n.y),
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

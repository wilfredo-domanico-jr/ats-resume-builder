type Props = {
  bullets: string[];
  onChange: (bullets: string[]) => void;
};

function BulletList({ bullets, onChange }: Props) {
  const addBullet = () => {
    onChange([...bullets, ""]);
  };

  const updateBullet = (index: number, value: string) => {
    const updated = [...bullets];
    updated[index] = value;
    onChange(updated);
  };

  const removeBullet = (index: number) => {
    onChange(bullets.filter((_, i) => i !== index));
  };

  return (
    <>
      <label>Bullet Points</label>

      {bullets.map((bullet, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: ".4rem",
            marginBottom: ".4rem",
          }}
        >
          <input
            type="text"
            value={bullet}
            placeholder="Achieved..."
            style={{ flex: 1 }}
            onChange={(e) => updateBullet(index, e.target.value)}
          />

          <button
            className="btn btn-ghost btn-icon btn-sm"
            style={{ flexShrink: 0 }}
            type="button"
            onClick={() => removeBullet(index)}
          >
            ×
          </button>
        </div>
      ))}

      <button
        className="btn btn-ghost btn-sm"
        style={{ marginTop: ".25rem" }}
        type="button"
        onClick={addBullet}
      >
        + Add bullet
      </button>
    </>
  );
}

export default BulletList;

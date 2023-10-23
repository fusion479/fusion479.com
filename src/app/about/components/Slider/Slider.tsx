import styles from "./Slider.module.css";

export default function Slider() {
  return (
    <div className="relative">
      <div className="whitespace-nowrap">
        {[0, 0].map((_, i) => (
          <div className={styles.images} key={i}>
            <img
              src="placeholder_image.jpg"
              className="rotate-12"
              alt="placeholder"
            />
            <img src="placeholder_image.jpg" alt="placeholder" />
            <img src="placeholder_image.jpg" alt="placeholder" />
            <img
              src="placeholder_image.jpg"
              className="-rotate-12"
              alt="placeholder"
            />
            <img src="placeholder_image.jpg" alt="placeholder" />
          </div>
        ))}
      </div>
    </div>
  );
}

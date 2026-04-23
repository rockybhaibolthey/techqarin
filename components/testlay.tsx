export default function TestLay() {
  return (
    <div style={styles.scene}>
      {/* White sheet */}
      <div style={styles.sheet}>
        <svg viewBox="0 0 1000 600" style={styles.svg}>
          <defs>
            <mask id="cutout-mask">
              {/* White = visible sheet */}
              <rect width="100%" height="100%" fill="white" />

              {/* Black = carved hole */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="120"
                fontWeight="700"
                fill="black"
                fontFamily="Arial"
              >
                Techqarin
              </text>
            </mask>
          </defs>

          {/* White sheet with cutout */}
          <rect
            width="100%"
            height="100%"
            fill="white"
            mask="url(#cutout-mask)"
          />
        </svg>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  scene: {
    height: "100vh",
    width: "100%",
    backgroundImage: "url('https://images.unsplash.com/photo-1773332585771-5c9c5fa642d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  sheet: {
    width: "80%",
    height: "60%",
  },

  svg: {
    width: "100%",
    height: "100%",
    display: "block",
  },
};
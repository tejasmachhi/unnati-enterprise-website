

export default function Loading() {
  return (
    <div className="universal-loader-container">
      {/* 3D Cube Loader from Uiverse.io - Industrial theme */}
      <div className="cube-loader">
        <div className="cube-wrapper">
          <span style={{ '--i': 0 }} className="cube-span"></span>
          <span style={{ '--i': 1 }} className="cube-span"></span>
          <span style={{ '--i': 2 }} className="cube-span"></span>
          <span style={{ '--i': 3 }} className="cube-span"></span>
          <div className="cube-top"></div>
          <div className="cube-bottom"></div>
        </div>
      </div>
      
      <div className="loading-text">UNNATI ENTERPRISE</div>
    </div>
  );
}

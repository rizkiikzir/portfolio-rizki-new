const imageDimensions: Record<string, { width: number; height: number }> = {
  "/images/profile-557.webp": { width: 557, height: 743 },
  "/images/profile-1114.webp": { width: 1114, height: 1485 },
  "/images/profile.jpg": { width: 2561, height: 3415 },
  "/images/education/politeknik-negeri-lhokseumawe.png": {
    width: 228,
    height: 221,
  },
  "/images/education/smkn-1-tanah-jambo-aye.png": {
    width: 500,
    height: 500,
  },
  "/images/experience/difa1.webp": { width: 900, height: 1200 },
  "/images/experience/difa2.webp": { width: 1200, height: 900 },
  "/images/experience/difa3.webp": { width: 1200, height: 900 },
  "/images/experience/difa4.webp": { width: 900, height: 1200 },
  "/images/experience/pln1.webp": { width: 900, height: 1200 },
  "/images/experience/pln2.webp": { width: 1200, height: 675 },
  "/images/experience/pln3.webp": { width: 900, height: 1200 },
  "/images/experience/pln4.webp": { width: 1200, height: 900 },
  "/images/organizations/ieclop.png": { width: 447, height: 447 },
  "/images/organizations/komit-digihub.png": { width: 447, height: 447 },
  "/images/projects/serin/01-dashboard.png": { width: 1909, height: 946 },
  "/images/projects/serin/02-monitoring-realtime.png": {
    width: 1779,
    height: 884,
  },
  "/images/projects/serin/03-laporan-timeline.png": {
    width: 1909,
    height: 945,
  },
  "/images/projects/serin/04-detail-laporan.png": {
    width: 1920,
    height: 1623,
  },
  "/images/projects/serin/05-riwayat-laporan.png": {
    width: 1912,
    height: 946,
  },
  "/images/projects/serin/documentation/02-arsitektur-lightexnet.png": {
    width: 1586,
    height: 992,
  },
  "/images/projects/serin/documentation/03-accuracy-loss.png": {
    width: 1481,
    height: 1837,
  },
  "/images/projects/serin/documentation/04-confusion-matrix.png": {
    width: 649,
    height: 547,
  },
  "/images/projects/serin/documentation/05-contoh-laporan-pdf.png": {
    width: 891,
    height: 835,
  },
  "/images/projects/sim-yantek/01-login.png": { width: 498, height: 1110 },
  "/images/projects/sim-yantek/02-dashboard.png": { width: 470, height: 1047 },
  "/images/projects/sim-yantek/03-input-progress.png": {
    width: 558,
    height: 1243,
  },
  "/images/projects/sim-yantek/04-daftar-progress.png": {
    width: 720,
    height: 1604,
  },
  "/images/projects/sim-yantek/05-pengembalian-progress.png": {
    width: 720,
    height: 1604,
  },
  "/images/projects/sim-yantek/documentation/01-context-diagram.png": {
    width: 1400,
    height: 800,
  },
  "/images/projects/sim-yantek/documentation/02-dfd-level-0.png": {
    width: 1213,
    height: 866,
  },
  "/images/projects/sim-yantek/documentation/03-dfd-authentication.png": {
    width: 1200,
    height: 800,
  },
  "/images/projects/sim-yantek/documentation/04-dfd-progress.png": {
    width: 1200,
    height: 800,
  },
  "/images/projects/sim-yantek/documentation/05-dfd-verifikasi.png": {
    width: 1200,
    height: 900,
  },
  "/images/projects/sim-yantek/documentation/06-erd.png": {
    width: 1600,
    height: 1000,
  },
  "/images/projects/sim-yantek/documentation/07-account-settings.png": {
    width: 532,
    height: 896,
  },
  "/images/projects/teras-kita/01-login.png": { width: 1280, height: 800 },
  "/images/projects/teras-kita/02-dashboard.png": { width: 1280, height: 800 },
  "/images/projects/teras-kita/03-create-order.png": {
    width: 1280,
    height: 800,
  },
  "/images/projects/teras-kita/04-menu.png": { width: 1280, height: 800 },
  "/images/projects/teras-kita/05-table.png": { width: 1280, height: 800 },
  "/images/projects/teras-kita/06-report.png": { width: 1280, height: 800 },
  "/images/projects/teras-kita/documentation/07-struk-pembayaran.png": {
    width: 516,
    height: 796,
  },
};

export function getImageDimensions(src: string) {
  const dimensions = imageDimensions[src];

  if (!dimensions) {
    throw new Error(`Missing intrinsic dimensions for image: ${src}`);
  }

  return dimensions;
}

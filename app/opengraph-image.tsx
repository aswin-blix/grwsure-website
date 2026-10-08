import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "GRWSURE INFOTECH — software built around your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "74px", color: "white", background: "radial-gradient(circle at 85% 5%, #6555e8 0%, transparent 32%), radial-gradient(circle at 10% 100%, #1c786f 0%, transparent 31%), #10152f", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}><div style={{ width: 58, height: 58, borderRadius: "17px 7px 17px 7px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(145deg, #6555e8, #4d8bff)", fontSize: 28, fontWeight: 800 }}>G</div><div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}><strong style={{ fontSize: 24, letterSpacing: 2 }}>GRWSURE</strong><span style={{ marginTop: 8, color: "#aeb6cf", fontSize: 13, letterSpacing: 5 }}>INFOTECH</span></div></div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}><span style={{ color: "#c5f36d", fontSize: 20, letterSpacing: 3, textTransform: "uppercase" }}>Custom software · AI · Automation</span><div style={{ marginTop: 20, fontSize: 72, lineHeight: 1.04, fontWeight: 760, letterSpacing: -4 }}>Software built around the way your business works.</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#aeb6cf", fontSize: 17 }}><span>Web & mobile · AI agents · ERP & CRM</span><span>grwsureinfotech.in</span></div>
    </div>,
    size,
  );
}

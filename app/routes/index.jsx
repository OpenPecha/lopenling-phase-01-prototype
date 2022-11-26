import { Link } from "@remix-run/react";

// import env from "~/services/discourse_sso";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to="/text-viewer"> text viewer</Link>
    </div>
  );
}

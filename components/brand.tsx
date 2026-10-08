import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="GRWSURE INFOTECH home">
      <span className="brand-mark" aria-hidden="true">
        <span>G</span>
      </span>
      <span className="brand-copy">
        <strong>GRWSURE</strong>
        {!compact && <small>INFOTECH</small>}
      </span>
    </Link>
  );
}

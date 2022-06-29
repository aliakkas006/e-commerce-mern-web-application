import Alert from "react-bootstrap/Alert";

export default function MessageBox({ variant, children }) {
  return <Alert variant={variant || "info"}>{children}</Alert>;
}

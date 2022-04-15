import classnames from "classnames"

export default function Header({ title, className }) {
  return <h1 className={classnames('title', className)}>{title}</h1>
}

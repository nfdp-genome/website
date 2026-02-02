import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const classNames = [
    styles.btn,
    styles[variant],
    size === 'sm' && styles.sm,
    fullWidth && styles.full,
    className
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

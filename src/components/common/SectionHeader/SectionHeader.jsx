import styles from './SectionHeader.module.css'

export default function SectionHeader({
  tag,
  title,
  subtitle,
  center = false,
  light = false,
  className = ''
}) {
  const classNames = [
    styles.header,
    center && styles.center,
    light && styles.light,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

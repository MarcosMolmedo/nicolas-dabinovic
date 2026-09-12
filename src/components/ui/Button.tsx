import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

export default function Button({
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
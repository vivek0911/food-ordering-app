import classNames from 'classnames'
import PropTypes from 'prop-types'

import { childrenProp } from 'utils/prop-types'

export const ButtonVariant = {
  Default: 'bg-primary',
  Cyan: 'bg-cyan-light',
  Secondary: 'bg-secondary',
  BlueDark: 'bg-primary',
  Transparent: 'bg-transparent',
}

export const ButtonKind = {
  Default: 'default',
  Flat: 'flat',
}

function Button({ children, className, disabled, kind, variant, ...props }) {
  return (
    <button
      {...props}
      className={classNames([
        'flex justify-center items-center box-border p-4 h-13 max-h-13 border text-white rounded transition ease-in-out delay-200 cursor-pointer outline-none hover:opacity-80 disabled:opacity-75',
        variant,
        kind,
        className,
      ])}
      disabled={disabled}
      style={{ pointerEvents: disabled ? 'none' : 'initial' }}
    >
      <span className="text-base font-medium leading-5">{children}</span>
    </button>
  )
}

Button.propTypes = {
  children: childrenProp,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(Object.values(ButtonKind)),
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),
}

Button.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  kind: ButtonKind.Default,
  variant: ButtonVariant.Default,
}

export default Button

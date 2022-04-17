import * as React from 'react'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

type BaseProps = {
  children: React.ReactNode
  className?: string
  styleType: 'primary' | 'secondary' | 'tertiary'
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
  }

type ButtonAsUnstyled = Omit<ButtonAsButton, 'as' | 'styleType'> & {
  as: 'unstyled'
  styleType?: BaseProps['styleType']
}

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: 'link'
  }

type ButtonAsExternal = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'externalLink'
  }

type ButtonProps =
  | ButtonAsButton
  | ButtonAsExternal
  | ButtonAsLink
  | ButtonAsUnstyled

export function Button(props: ButtonProps): JSX.Element {
  const allClassNames = `${styleType ? styleType : ''} ${
    className ? className : ''
  }`

  if (rest.as === 'link') {
    const {allClassNames, ...rest} = props;
    return <Link className={allClassNames} {...rest} />
  } else if (as === 'externalLink') {
    const {allClassNames, ...rest} = props
    return (
      <a
        className={allClassNames}
        // provide good + secure defaults while still allowing them to be overwritten
        target='_blank'
        rel='noopener noreferrer'
        {...rest}
      >
        {rest.children}
      </a>
    )
  } else if (as === 'unstyled') {
    const {className, ...rest} = props
    return <button className={className} {...rest} />
  } else {
    const {allClassNames, ...rest} = props
    return <button className={allClassNames} {...rest} />
  }

  throw new Error('could not determine the correct button type')
}

type OmitFromTypes = 'className' | 'styleType' | 'as'
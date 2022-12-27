import { styled } from '@stitches/react'
import iconClose from './assets/X.svg'


export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '300px',
  maxWidth: '500px',
  margin: '1rem',
  boxSizing: 'border-box'
})

export const Input = styled('input', {
  backgroundColor: 'hsl(0, 0%, 100%)',
  border: '1px solid hsl(100%, 100%, 100%)',
  minHeight: 'calc(40px - 4px)',
  borderRadius: '8px',
  padding: '4px 12px',
  width: '100%',
  boxSizing: 'border-box'
})

export const Result = styled('div', {
  backgroundColor: 'hsl(0, 0%, 95%)',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '200px',
  maxHeight: '300px',
  overflowY: 'auto',
  borderRadius: '8px',
  boxSizing: 'border-box',
  padding: '1rem',
  gap: '0.5rem',
  color: 'hsl(0, 0%, 0%)',
})

export const ItemList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  backgroundColor: 'hsl(0, 0%, 100%)',
  minHeight: '40px',
  boxSizing: 'border-box',
  borderRadius: '8px',
  color: 'hsl(0, 0%, 0%)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'hsl(0, 0%, 85%)',
  }
})

export const WrapperSelect = styled('div', {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  width: '100%',
  boxSizing: 'border-box',
  zIndex: '9'
})

export const Selected = styled('span', {
  backgroundColor: 'hsl(0, 0%, 95%)',
  borderRadius: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: '100px',
  padding: '4px 12px',
  cursor: 'pointer',
  color: 'hsl(0, 0%, 0%)',
  boxSizing: 'border-box',
  margin: '0 8px',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: 'hsl(0, 0%, 85%)',
  }
})

export const WrapperInput = styled('div', {
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
})

export const CloseBtn = styled('button', {
  border: 'none',
  backgroundColor: 'transparent',
  height: '14px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  '&::before': {
    content: '',
    width: '14px',
    height: '14px',
    background: `url(${iconClose}) no-repeat center center`,
    display: 'inline-flex',
    boxSizing: 'border-box',
  }
})

export const RegionInput = styled('div', {
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
})
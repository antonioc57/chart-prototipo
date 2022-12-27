import { useState, useRef } from 'react'
import { Input, Wrapper, Result, ItemList, Selected, WrapperInput, WrapperSelect, CloseBtn, RegionInput } from './style'


const meses = [
  { id: 1, mes: 'Janeiro' },
  { id: 2, mes: 'Fevereiro' },
  { id: 3, mes: 'Março' },
  { id: 4, mes: 'Abril' },
  { id: 5, mes: 'Maio' },
  { id: 6, mes: 'Junho' },
  { id: 7, mes: 'Julho' },
  { id: 8, mes: 'Agosto' },
  { id: 9, mes: 'Setembro' },
  { id: 10, mes: 'Outubro' },
  { id: 11, mes: 'Novembro' },
  { id: 12, mes: 'Dezembro' }
]


export function Select() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef()

  const filtered = search === '' ? meses : meses.filter(item => item.mes.toLowerCase().includes(search.toLowerCase()))

  const handlerSelected = (value) => {
    setSelected(value)
    setSearch('')
    setShowResult(false)
  }

  const removeSelected = () => {
    setSelected(null)
    inputRef.current.focus()
  }

  const onClear = () => {
    setSelected(null)
    setSearch('')
    setShowResult(false)
  }

  return (
    <Wrapper>
      <WrapperInput>
        {selected && (
          <WrapperSelect>
            <Selected>{selected.mes} <CloseBtn onClick={removeSelected} /></Selected>
          </WrapperSelect>)
        }
        <RegionInput>
          <Input
            ref={inputRef}
            placeholder="Digite sua pesquisa"
            onFocus={() => setShowResult(true)}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {showResult && <CloseBtn style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translate(0, -50%)' }} onClick={onClear} />}
        </RegionInput>
      </WrapperInput>
      {showResult && filtered.length > 0 &&
        <Result>
          {filtered.map(item =>
            <ItemList onClick={() => handlerSelected({ id: item.id, mes: item.mes })} key={item.id}>
              {item.mes}
            </ItemList>)
          }
        </Result>}
    </Wrapper>);
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Search from 'react-select'
import { SearchQuery, useSearchQuery } from 'src/generated/graphql'

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    // border: '1px dotted pink',

    color: state.isSelected ? 'gray' : 'black',
    backgroundColor: state.isSelected ? '#20232a' : 'white',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: '300px',
    // border: '1px solid #CCCCCC',
    background: 'white',
    borderRadius: '5px',
    display: 'flex',
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}

export default function SearchInput(): JSX.Element {
  const [onSearch, setOnSearch] = useState<string>('')

  const { data, loading } = useSearchQuery({
    variables: {
      data: {
        searchValue: onSearch,
      },
    },
    skip: onSearch.length < 1,
  })

  const options = () =>
    data?.search?.map((item: SearchQuery['search'][number]) => ({
      value: item.id,
      label: item.title,
    }))

  return (
    <Search
      options={options()}
      name="theme_id"
      styles={customStyles}
      isLoading={loading}
      placeholder="Search something here"
      onInputChange={(e) => {
        setOnSearch(e)
      }}
      onChange={(e) => {
        console.log(e)
      }}
    />
  )
}

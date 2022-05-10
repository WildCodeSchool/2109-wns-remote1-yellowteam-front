/* eslint-disable @typescript-eslint/no-explicit-any */
import { useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search, { StylesConfig } from 'react-select'
import { SearchQuery, useSearchQuery } from 'src/generated/graphql'

export default function SearchInput(): JSX.Element {
  const [onSearch, setOnSearch] = useState<string>('')
  const { colorMode } = useColorMode()
  const navigate = useNavigate()

  const customStyles: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      color: state.isSelected ? 'gray' : 'black',
      backgroundColor: state.isSelected ? '#20232a' : 'white',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      marginRight: '10px',
      height: '40px',
      width: '300px',
      color: "colorMode === 'dark' ? 'white' : 'black'",
      marginLeft: '10px',
      // border: '1px solid #CCCCCC',
      background: colorMode === 'light' ? '#EDF2F7' : '#272D38',
      borderRadius: '5px',
      display: 'flex',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return {
        ...provided,
        opacity,
        transition,
        color: "colorMode === 'dark' ? 'white' : 'black'",
      }
    },
  }

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
      label: `${item.type} :${item.title}`,
      type: item.type,
    }))

  return (
    <Search
      options={options()}
      name="theme_id"
      noOptionsMessage={() => ''}
      styles={customStyles}
      isLoading={loading}
      placeholder="Search something here  🔎"
      onInputChange={(e) => {
        setOnSearch(e)
      }}
      onChange={(e: any) => {
        if (e.type === 'PROJECT') {
          navigate(`/projects/${e.value}`)
        }
      }}
    />
  )
}

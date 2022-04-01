import { useState } from 'react'
import Search from 'react-select'
import { SearchQuery, useSearchQuery } from 'src/generated/graphql'

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
      //   styles={customStyles}
      //   options={options}
      isLoading={loading}
      onInputChange={(e) => {
        setOnSearch(e)
      }}
      onChange={(e) => {
        console.log(e)
      }}
    />
  )
}

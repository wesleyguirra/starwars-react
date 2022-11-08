import React, {useEffect, useState} from 'react';

const RelationalArrayDataCell = ({urlArray, fieldsToShow, ...props}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  //TODO: Implement useMemo to cache things out
  const fetchRelationalData = async () => {
    setLoading(true)
    const responses = await Promise.all(urlArray.map(async url => fetch(url)))
    const result = await Promise.all(responses.map((singleResponse) => singleResponse.json()))
    setData(result)
    setLoading(false)
  }

  useEffect(() => {
    fetchRelationalData()
  }, [])
  return (
    <td {...props}>
      {loading ? 'Fetching...' : (
        <ul>
          {data.map(item => {
            return <li>{fieldsToShow.map(key => item[key]).join(' - ')}</li>
          })}
        </ul>
      )}
    </td>
  );
};

export default RelationalArrayDataCell;
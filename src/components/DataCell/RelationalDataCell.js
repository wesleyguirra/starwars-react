import React, {useEffect, useState} from 'react';

const RelationalDataCell = ({url, fieldsToShow, ...props}) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchRelationalData = async () => {
    setLoading(true)
    const response = await fetch(url)
    const result = await response.json()
    Object.keys(result).filter(key => !fieldsToShow.includes(key)).forEach(key => delete result[key])

    setData(result)
    setLoading(false)
  }

  useEffect(() => {
    fetchRelationalData()
  }, [])

  return (
    <td {...props}>
      {loading ? 'Fetching...' : fieldsToShow.map(key => data[key]).join(' ')}
    </td>
  );
};

export default RelationalDataCell;
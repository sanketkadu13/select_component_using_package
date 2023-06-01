import React,{ useState } from 'react'
import Select from 'react-select';


export default function App() {
    const [value,setvalue]=useState(null)

  const options=[
    {value:"INDIA",label:"India"},
    {value:"CHINA",label:"China"},
    {value:"NEPAL",label:"Nepal"},
    {value:"ENGLAND",label:"England"},
    {value:"WESTINDIES",label:"WESTINDIES"},
    {value:"DUBAI",label:"Dubai"},
    {value:"SCOTTLAND",label:"Scottland"},
    {value:"ENGLAND",label:"England"}
  ]
  return (
    <div style={{ margin:100, width:200 }}>
      <Select
      options={options}
      defaultValue={value}
      placeholder="Select Country"
      onChange={setvalue}
      isMulti
      isSearchable
      noOptionsMessage={()=>"No Such Country Exist"}

      styles={{
        clearIndicator:()=>({ color:"red"})
      }}
      />
    </div>
  )
}

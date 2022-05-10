/* eslint-disable react/jsx-props-no-spreading */
import { Dropzone, FileValidated } from '@dropzone-ui/react'

interface IProps {
  file: FileValidated[]
  setFile: (FileValidated: FileValidated[]) => void
}

export default function MyDropzone({ file, setFile }: IProps): JSX.Element {
  return (
    <Dropzone
      style={{
        border: '1px solid #e6e6e6',
        opacity: 0,
        zIndex: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      onChange={(img) => {
        setFile(img)
      }}
      value={file}
    >
      {/* {file.map((fle) => (
        <FileItem key={fle.id} {...fle} preview />
      ))} */}
    </Dropzone>
  )
}

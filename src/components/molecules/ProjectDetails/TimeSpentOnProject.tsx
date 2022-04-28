import { Box, Text } from '@chakra-ui/react'
import { Doughnut } from 'react-chartjs-2'

interface IProps {
  dataDoughnutChart: {
    labels: never[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string[]
      borderColor: string[]
      borderWidth: number
    }[]
  }
  optionsDoughnutChart: { cutout: number }
}

const TimeSpentOnProject = ({
  dataDoughnutChart,
  optionsDoughnutChart,
}: IProps): React.ReactElement => {
  return (
    <Box pr={5} flex={1} ml={5}>
      <Text mb={3} textStyle="titleWhiteBoard">
        Time spent on project
      </Text>
      <Box width="10rem" height="10rem">
        <Doughnut data={dataDoughnutChart} options={optionsDoughnutChart} />
        <Text marginTop="-53%" marginLeft="43%">
          {dataDoughnutChart.datasets[0].data[0].toPrecision(2)}%
        </Text>
      </Box>
    </Box>
  )
}

export default TimeSpentOnProject

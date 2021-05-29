import { Container } from './styles';

export function TableService(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Modelo</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>001</td>
            <td>FGK</td>
            <td>20/02/2021</td>
            <td>Em Uso</td>
          </tr>
          <tr>
            <td>003</td>
            <td>FGG</td>
            <td>21/02/2021</td>
            <td>Em Uso</td>
          </tr>
          <tr>
            <td>006</td>
            <td>FGK</td>
            <td>20/02/2021</td>
            <td>Em Uso</td>
          </tr>
        </tbody>

      </table>
    </Container>
  )
}
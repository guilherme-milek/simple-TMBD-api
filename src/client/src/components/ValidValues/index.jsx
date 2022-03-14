import { Container } from "./styles";

export default function ValidValues({ validValues, title }) {
  return (
    <Container>
      {!!title && <h3>{title}</h3>}
      {validValues.map(({ title, values }, index) => (
        <div className="valid-values" key={index}>
          <h4>{title}</h4>
          <table>
            <tbody>
              {values.map(({ value, description }, index) => {
                return (
                  <tr key={index} className="table-row">
                    <td className="table-data">
                      <p>{value}</p>
                    </td>
                    <td className="table-data">
                      <p>{description}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </Container>
  );
}

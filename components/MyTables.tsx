import panelsData from '../data/el-6.json'; //

function MyTables() {
  return (
    <div className='container mx-auto my-8 p-4'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Информация о Панелях
      </h1>
      <div className='overflow-x-auto shadow-md rounded-lg'>
        <table className='min-w-full divide-y divide-gray-200 bg-white'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Название Панели
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Вводное Устройство
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Начальная Мощность
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Рассчитанная Мощность
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Рассчитанный Ток
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Устройства
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Общее Количество Модулей
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Вместимость Шкафа
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {panelsData.panels.map((panel) => (
              <tr key={panel.name}>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  {panel.name}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {panel.connectedFrom.mainBreaker.type} (
                  {panel.connectedFrom.mainBreaker.rating})
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {panel.startingPower}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {panel.calculatedPower}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {panel.calculatedCurrent}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  <ul>
                    {panel.connectedDevices.map((device) => (
                      <li key={device.id}>
                        <strong>{device.id}</strong>: {device.type} (
                        {device.rating}) - {device.consumer}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {panel.totalModules}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {panel.cabinetCapacity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MyTables;

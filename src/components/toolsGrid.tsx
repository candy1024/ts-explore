import Card from "antd/es/card";
import './css/toolsGrid.css';

const { Meta } = Card; 

function ToolsGrid() {
    const list = new Array(10).fill(null);

    return (
        <div className="content-box">
            {
                list.map((_, index) => (
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      key={index}
                      className="card-item"
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                      <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                  ))
            }
        </div>
    )
}

export default ToolsGrid;
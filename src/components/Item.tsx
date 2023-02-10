
import ItemColor from './ItemColor';
import { Row, Col, Image, Container, Button } from 'react-bootstrap';
import {  AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai"

type ItemProps = {
	name: string;
	id: number;
	img: string;
	price: number;
	desc: string;
	colors: string[];
};

function Item({ id, img, name, desc, price, colors }: ItemProps) {
	return (
		
			<Row className='bg-light align-items-center my-2 py-3 rounded' >
            <Col>
             
                        <Image src={img} alt={name} width={60} height={60} />
                        <h3 className=' fs-5'>{name}</h3>
                        <p style={{fontSize:"13px"}}>{desc.slice(0, 11)}</p>
                   
              
					
					
            </Col>
            
				<Col >
					<ItemColor colors={colors} />
				</Col>
				<Col  className="fs-4">< AiOutlineMinusSquare className=' me-1'/><span className='fs-5'>1</span> <  AiOutlinePlusSquare className=' ms-1'/></Col>
				<Col >{price}</Col>
			</Row>
		
	);
}

export default Item;

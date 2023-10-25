import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type SetListItemProps = {
    setId: number,
    setName: string,
}

const SetList = () => {
    const [setListItems, setSetListItems] = useState<any[]>([]);
    useEffect(() => {
        import("./data/sets-master.json")
            .then((data) => {
                setSetListItems(data.sets);
            })
    });
    return (
        <>
            {
                setListItems.map((set) => (
                    <SetListItem key={set.id} setId={set.id} setName={set.name} />
                ))
            }
        </>
    )
}
const SetListItem = (props: SetListItemProps) => {
    const { setName, setId } = props;
    return (
        <div>
            {setName} - <Link className="App-link" to={`/set/${setId}`}>Start</Link>
        </div>
    )
}

export default SetList;
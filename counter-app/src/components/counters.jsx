import Counter from './counter';
const Counters = (props) => {
    const {onReset, counters, onDelete, onIncrement, onDecrement} = props; // 对象析构
    return (
        <div>
            <button onClick={onReset} className="btn btn-primary btn m-2">重置</button>
            { counters.map(counter => (
                <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}
                />
            ))}
        </div>
    );
}


export default Counters;
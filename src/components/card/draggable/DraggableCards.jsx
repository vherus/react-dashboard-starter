import {
    DndContext, 
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core'
import {
    useSortable,
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
    restrictToVerticalAxis,
    restrictToParentElement,
  } from '@dnd-kit/modifiers'
import Card from '../Card'

const SortableItem = ({ id, children }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    )
}

const DraggableCards = ({ data, setData, allowHorizontal = false }) => {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const handleDragEnd = (event) => {
        const {active, over} = event;
        
        if (active.id !== over.id) {
            setData((items) => {
                const ids = items.map(item => item.id)
                const oldIndex = ids.indexOf(active.id);
                const newIndex = ids.indexOf(over.id);
            
            return arrayMove(items, oldIndex, newIndex);
          });
        }
    }

    const mods = [restrictToParentElement]

    if (!allowHorizontal) {
        mods.push(restrictToVerticalAxis)
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={mods}
        >
            <SortableContext
                items={data}
                strategy={verticalListSortingStrategy}
            >
                {data.map((item) => (
                    <SortableItem key={item.id} id={item.id}>
                        <Card header={item.name}>
                            {item.content}
                        </Card>
                    </SortableItem>
                ))}
            </SortableContext>
        </DndContext>
    )
}

export default DraggableCards
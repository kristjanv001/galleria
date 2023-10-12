

type ProgressBarProps = {
    percent: number
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
    const progressBar = {
        backgroundColor: "#e5e5e5",

    }

    const progress = {
        height: "2px",
        width: `${percent}%`,
        backgroundColor: "black",
        transition: 'width 1s ease-in-out',
    }

    return (
        <div style={progressBar}>
            <div style={progress}></div>
        </div>
    )
}
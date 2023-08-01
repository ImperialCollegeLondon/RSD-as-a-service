import KeywordBox from './KeywordBox'

type KeywordsProps = {
    keywords: object
}

export default function Keywords({keywords}: KeywordsProps) {
    const keywordButtons = keywords.map((keyword: object, index: number) => {
        return <KeywordBox key={index} label={keyword.value} />
    })
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="text-2xl ml-10 mt-14">
                Popular Keywords
            </div>
            <div className="flex flex-wrap gap-10 md:gap-3 p-5 md:p-10 ">
                {keywordButtons}
            </div>
        </div>
    )
}
